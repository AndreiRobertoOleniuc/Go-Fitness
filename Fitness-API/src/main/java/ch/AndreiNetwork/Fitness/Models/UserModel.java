package ch.AndreiNetwork.Fitness.Models;

import ch.AndreiNetwork.Fitness.Database.DBActions;
import ch.AndreiNetwork.Fitness.ObjectModels.LoginPayload;

import java.sql.SQLException;

public class UserModel {
    public LoginPayload login(String username, String password) throws SQLException, ClassNotFoundException {
        return new DBActions().checkUser(username,password);
    }
    public LoginPayload register(String username, String email, String password) throws SQLException, ClassNotFoundException {
        return new DBActions().register(username,email,password);
    }
}
