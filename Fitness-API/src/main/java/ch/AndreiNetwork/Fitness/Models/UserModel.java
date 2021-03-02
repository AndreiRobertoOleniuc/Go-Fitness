package ch.AndreiNetwork.Fitness.Models;

import ch.AndreiNetwork.Fitness.ObjectModels.User;

import java.util.ArrayList;

public class UserModel {
    ArrayList<User> benutzer;
    public UserModel(){
        benutzer= new ArrayList<>();
        User u1 = new User("Andrei Oleniuc","andrei","andrei@gmail.com","12345");
        User u2 = new User("Tim Scholl","tim","tim@gmail.com","123456");
        User u3 = new User("Jordan Renfer","jordan","jordan@gmail.com","1234567");
        benutzer.add(u1);
        benutzer.add(u2);
        benutzer.add(u3);
    }
    public boolean login(String username,String password){
        if(username.contains("@")){
            for(User s: benutzer){
                if(s.getEmail().equals(username)&&s.getPassword().equals(password)){
                    return true;
                }
            }
        }else{
            for(User s: benutzer){
                if(s.getUsername().equals(username)&&s.getPassword().equals(password)){
                    return true;
                }
            }
        }
        return false;
    }
}
