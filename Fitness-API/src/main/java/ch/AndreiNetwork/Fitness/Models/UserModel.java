package ch.AndreiNetwork.Fitness.Models;

import ch.AndreiNetwork.Fitness.ObjectModels.LoginPayload;
import ch.AndreiNetwork.Fitness.ObjectModels.User;

import java.util.ArrayList;
import java.util.Arrays;

public class UserModel {
    ArrayList<User> benutzer;
    public UserModel(){
        benutzer= new ArrayList<>();
        User u1 = new User("Andrei Oleniuc","andrei","andrei@gmail.com","12345");
        User u2 = new User("Tim Scholl","tim","tim@gmail.com","123456");
        User u3 = new User("Jordan Renfer","jordan","jordan@gmail.com","1234567");

        u1.setAge(19);
        u1.setGender(true);
        u1.setHeight(170.0);
        u1.setWeight(62.0);
        ArrayList<Double> numbers = new ArrayList<Double>(Arrays. asList(10.0, 2.0, 7.0, 2.0, 1.0, 2.0));
        u1.setPal(numbers);

        benutzer.add(u1);
        benutzer.add(u2);
        benutzer.add(u3);
    }
    public LoginPayload login(String username, String password){
        if(username.contains("@")){
            for(User s: benutzer){
                if(s.getEmail().equals(username)&&s.getPassword().equals(password)){
                    if(s.getAge()==0){
                        return new LoginPayload(true,false);
                    }else{
                        return new LoginPayload(true,true);
                    }
                }
            }
        }else{
            for(User s: benutzer){
                if(s.getUsername().equals(username)&&s.getPassword().equals(password)){
                    if(s.getAge()==0){
                        return new LoginPayload(true,false);
                    }else{
                        return new LoginPayload(true,true);
                    }
                }
            }
        }
        return new LoginPayload(false,false);
    }
    public boolean register(String fullName, String username, String email, String password){
        try{
            benutzer.add(new User(fullName,username,email,password));
            return true;
        }catch(Exception e) {
            e.printStackTrace();
        }
        return false;
    }
}
