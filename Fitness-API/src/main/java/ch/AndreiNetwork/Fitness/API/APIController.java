package ch.AndreiNetwork.Fitness.API;

import ch.AndreiNetwork.Fitness.Models.CalculationModel;
import org.springframework.web.bind.annotation.*;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;

@RestController
public class APIController {

    @CrossOrigin(origins = "*")
    @GetMapping("/api/public/")
    public String login(){
        return "API Runs and Updated and now? please";
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
        double mittelWert = new CalculationModel().getBaseCalorie(gender,weight,height,age);
        mittelWert*= new CalculationModel().getPAL(stunden);
        return mittelWert;
    }

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
            String command = "python /c start python  C:\\Automation\\automation.py";
            Process p = Runtime.getRuntime().exec(command );
            /*pull();
            try
            {
                Thread.sleep(5000);
                FitnessApiApplication.restart();
            }
            catch(InterruptedException ex)
            {
                Thread.currentThread().interrupt();
            }*/
        }
        return "OK";
    }
    public void pull(){
        try{
            Process process = Runtime.getRuntime().exec("git pull https://github.com/AndreiRobertoOleniuc/Go-Fitness.git master ");
            StringBuilder output = new StringBuilder();
            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
            String line;
            while((line = reader.readLine())!= null){
                output.append(line + "\n");
            }
            int exitVal = process.waitFor();
            if(exitVal == 0){
                System.out.println("Success");
                System.out.println(output);
            }else{
                System.out.println("Something abnormal has happened :( ");
            }
        }catch(IOException | InterruptedException e){
            e.printStackTrace();
        }
    }
}
