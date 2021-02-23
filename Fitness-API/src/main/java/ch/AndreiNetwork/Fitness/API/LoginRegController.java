package ch.AndreiNetwork.Fitness.API;

import ch.AndreiNetwork.Fitness.Models.CalculationModel;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
public class LoginRegController {

    @CrossOrigin(origins = "*")
    @GetMapping("/api/public/")
    public String login(){
        return "API Runs";
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/api/public/login")
    public boolean login(@RequestParam(value = "username",defaultValue = "0") String username,
                         @RequestParam(value = "password",defaultValue = "0") String password){
        return false;
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/api/public/getCalorie")
    public double getCalorie(@RequestParam(value = "gender",defaultValue = "true") boolean gender,
                             @RequestParam(value = "weight",defaultValue = "0") double weight,
                             @RequestParam(value = "height",defaultValue = "0") double height,
                             @RequestParam(value = "age",defaultValue = "0") double age,
                             @RequestBody ArrayList<Double> stunden){
        System.out.println(stunden);
        double mittelWert = new CalculationModel().getBaseCalorie(gender,weight,height,age);
        mittelWert*= new CalculationModel().getPAL(stunden);
        return mittelWert;
    }
}
