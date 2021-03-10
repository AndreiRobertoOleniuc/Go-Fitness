package ch.AndreiNetwork.Fitness.Database;

import ch.AndreiNetwork.Fitness.ObjectModels.LoginPayload;
import ch.AndreiNetwork.Fitness.ObjectModels.User;

import java.sql.*;

public class DBActions {
    private final DBConnection jdbc;
    private Connection conn;

    public DBActions() throws SQLException, ClassNotFoundException {
        jdbc = DBConnection.getInstance();
    }
    public LoginPayload checkUser(String identification, String password){
        try {
            conn = jdbc.createConnection();
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
                if(rs.getObject(6) == null){
                    int id = rs.getInt(1);
                    rs.close();
                    ps.close();
                    conn.close();
                    return new LoginPayload(true,false,id);
                }else{
                    int id = rs.getInt(1);
                    rs.close();
                    ps.close();
                    conn.close();
                    return new LoginPayload(true,true,id);
                }
            }
        } catch (SQLException | ClassNotFoundException throwables) {
            throwables.printStackTrace();
        }
        return new LoginPayload(false,false,0);
    }
    public LoginPayload register(String username, String email, String password){
        try{
            conn = jdbc.createConnection();
            PreparedStatement ps = conn.prepareStatement("insert into user(username,email,password) values (?,?,?)");
            ps.setString(1,username);
            ps.setString(2,email);
            ps.setString(3,password);
            ps.execute();

            ps = conn.prepareStatement("select * from user where email=?  and password=? ;");
            ps.setString(1,email);
            ps.setString(2,password);
            ResultSet rs = ps.executeQuery();
            while(rs.next()){
                int id= rs.getInt(1);
                rs.close();
                ps.close();
                conn.close();
                return new LoginPayload(true,false,id);
            }
        }catch(SQLException | ClassNotFoundException throwables) {
            throwables.printStackTrace();
        }
        return new LoginPayload(false,false,0);
    }
    public boolean fillData(int id,String goal,boolean gender, double weight, double height, Date age,double caloriesPerDay){
        try{
            conn = jdbc.createConnection();
            PreparedStatement ps = conn.prepareStatement("update user set geschlecht = ?, goal = ?, height = ?, weight = ?, birthday = ?, caloriePerDay = ? where userID = ?");
            ps.setBoolean(1,gender);
            ps.setString(2,goal);
            ps.setDouble(3,height);
            ps.setDouble(4,weight);
            ps.setDate(5,age);
            ps.setDouble(6,caloriesPerDay);
            ps.setInt(7,id);
            ps.execute();
            ps.close();
            conn.close();
            return true;
        }catch(SQLException | ClassNotFoundException throwables) {
            throwables.printStackTrace();
        }
        return false;
    }
}
