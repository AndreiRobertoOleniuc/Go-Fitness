package ch.AndreiNetwork.Fitness.Database;

import java.sql.DriverManager;
import java.sql.SQLException;

public class DBConnection {
    private static DBConnection instance = null;
    private final String USERNAME = "root";
    private final String PASSWORD = "";
    private final String DB_CONNECTION_STRING = "jdbc:mysql://localhost/gofitness";
    private final String DRIVER = "com.mysql.cj.jdbc.Driver";
    private java.sql.Connection cn = null;

    private DBConnection() {

    }

    public static DBConnection getInstance() {
        if (instance == null) {
            instance = new DBConnection();
        }
        return instance;
    }

    public java.sql.Connection createConnection() throws SQLException, ClassNotFoundException, SQLException {
        cn =  DriverManager.getConnection(DB_CONNECTION_STRING, USERNAME, PASSWORD);
        return cn;
    }

    public void closeConnection() throws SQLException {
        cn.close();
        cn = null;
    }
}
