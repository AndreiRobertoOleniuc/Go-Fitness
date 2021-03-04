package ch.AndreiNetwork.Fitness.API;

import ch.AndreiNetwork.Fitness.Models.CalculationModel;
import ch.AndreiNetwork.Fitness.Models.GitModel;
import ch.AndreiNetwork.Fitness.Models.UserModel;
import ch.AndreiNetwork.Fitness.ObjectModels.LoginPayload;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;

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
                              @RequestParam(value = "password",defaultValue = "0") String password)  {
        return uM.login(username,password);
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/api/public/register")
    public boolean registration(
            @RequestParam(value = "name",defaultValue = "0") String name,
            @RequestParam(value = "email",defaultValue = "0") String email,
            @RequestParam(value = "username",defaultValue = "0") String username,
            @RequestParam(value = "password",defaultValue = "0") String password)  {
        return uM.register(name,username,email,password);
    }

    //Get Base Calorie (no gain no loss)
    @CrossOrigin(origins = "*")
    @PostMapping("/api/public/getCalorie")
    public double getCalorie(@RequestParam(value = "gender",defaultValue = "true") boolean gender,
                             @RequestParam(value = "weight",defaultValue = "0") double weight,
                             @RequestParam(value = "height",defaultValue = "0") double height,
                             @RequestParam(value = "age",defaultValue = "0") double age,
                             @RequestBody ArrayList<Double> stunden){
        double mittelWert = new CalculationModel().getBaseCalorie(gender,weight,height,age);
        mittelWert*= new CalculationModel().getPAL(stunden);
        return mittelWert;
    }

    //Restart API on Windows, Linux still TODO
    @CrossOrigin(origins = "*")
    @GetMapping("/api/public/restart")
    public String updateProject() throws IOException {
        int iExitValue;
        String sCommandString;
        boolean isWindows = System.getProperty("os.name").toLowerCase().startsWith("windows");
        if(isWindows){
            try{
                System.out.println("Windows");
                Process process = Runtime.getRuntime().exec("cmd /c start C:\\Automation\\Update.bat");
            }catch(IOException e){
                e.printStackTrace();
            }
        }else{
            System.out.println("Linux");
            new GitModel().pull();
            try
            {
                Thread.sleep(5000);
                FitnessApiApplication.restart();
            }
            catch(InterruptedException ex)
            {
                Thread.currentThread().interrupt();
            }
        }
        return "OK";
    }
}

