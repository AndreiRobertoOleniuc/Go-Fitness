package ch.AndreiNetwork.Fitness.API;

import ch.AndreiNetwork.Fitness.Database.DBActions;
import ch.AndreiNetwork.Fitness.Models.CalculationModel;
import ch.AndreiNetwork.Fitness.Models.GitModel;
import ch.AndreiNetwork.Fitness.Models.UserModel;
import ch.AndreiNetwork.Fitness.ObjectModels.FillDataPayLoad;
import ch.AndreiNetwork.Fitness.ObjectModels.LoginPayload;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;

@RestController
public class APIController {
    UserModel uM;
    public APIController(){
        uM = new UserModel();
    }
    //Check API
    @CrossOrigin(origins = "*")
    @GetMapping("/api/public/")
    public String login(){
        return "API Runs ";
    }

    //Login and Registration
    @CrossOrigin(origins = "*")
    @GetMapping("/api/public/login")
    public LoginPayload login(@RequestParam(value = "username",defaultValue = "0") String username,
                              @RequestParam(value = "password",defaultValue = "0") String password) throws SQLException, ClassNotFoundException {
        return uM.login(username,password);
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/api/public/register")
    public LoginPayload registration(
            @RequestParam(value = "email",defaultValue = "0") String email,
            @RequestParam(value = "username",defaultValue = "0") String username,
            @RequestParam(value = "password",defaultValue = "0") String password) throws SQLException, ClassNotFoundException {
        return uM.register(username,email,password);
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/api/public/fillData")
    public boolean getCalorie(
            @RequestParam(value = "id",defaultValue = "0") int id,
            @RequestParam(value = "goal",defaultValue = "0") String goal,
            @RequestParam(value = "gender",defaultValue = "0") boolean gender,
            @RequestParam(value = "weight",defaultValue = "0") double weight,
            @RequestParam(value = "height",defaultValue = "0") double height,
            @RequestBody FillDataPayLoad otherData) throws SQLException, ClassNotFoundException {
        double calories;
        if(goal.equals("zunehmen")){
            calories = new CalculationModel().gainWeight(gender,weight,height,otherData.getBirthday(),otherData.getStunden());
        }else{
            calories = new CalculationModel().loseWeight(gender,weight,height,otherData.getBirthday(),otherData.getStunden());
        }
        return new DBActions().fillData(id,goal,gender,weight,height,otherData.getBirthday(),calories);

    }
}
