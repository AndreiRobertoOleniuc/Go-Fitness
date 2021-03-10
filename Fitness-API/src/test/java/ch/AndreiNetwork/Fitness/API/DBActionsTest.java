package ch.AndreiNetwork.Fitness.API;

import ch.AndreiNetwork.Fitness.Database.DBConnection;
import org.junit.jupiter.api.Test;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;


import static org.junit.jupiter.api.Assertions.*;
public class DBActionsTest {
    private final DBConnection jdbc= DBConnection.getInstance();
    private Connection conn;
    @Test
    public void checkUserLogin(){
        String identification = "andrei@oleniuc.com";
        String password = "12345";
        try {
            conn = jdbc.createConnection();
            boolean isThere = false;
            PreparedStatement ps;
            if(identification.contains("@")){
                ps = conn.prepareStatement("select * from user where email=?  and password=? ;");
            }else{
                ps = conn.prepareStatement("select * from user where username=?  and password=? ;");
            }
            ps.setString(1,identification);
            ps.setString(2,password);
            ResultSet rs = ps.executeQuery();
            while (rs.next()){
                isThere=true;
            }
            ps.close();
            conn.close();
            assertTrue(isThere);
        } catch (SQLException | ClassNotFoundException throwables) {
            throwables.printStackTrace();
        }
    }
}
