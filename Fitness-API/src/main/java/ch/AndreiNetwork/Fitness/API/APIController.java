package ch.AndreiNetwork.Fitness.API;

import ch.AndreiNetwork.Fitness.Models.CalculationModel;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.ArrayList;
import org.apache.commons.exec.CommandLine;
import org.apache.commons.exec.DefaultExecutor;
import org.apache.commons.exec.ExecuteException;

@RestController
public class APIController {

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
        double mittelWert = new CalculationModel().getBaseCalorie(gender,weight,height,age);
        mittelWert*= new CalculationModel().getPAL(stunden);
        return mittelWert;
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/api/public/update")
    public String updateProject(){
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
            sCommandString = "sh /home/pi/Update.sh";
            CommandLine oCmdLine = CommandLine.parse(sCommandString);
            DefaultExecutor oDefaultExecutor = new DefaultExecutor();
            oDefaultExecutor.setExitValue(0);
            try {
                iExitValue = oDefaultExecutor.execute(oCmdLine);
            } catch (ExecuteException e) {
                System.err.println("Execution failed.");
                e.printStackTrace();
            } catch (IOException e) {
                System.err.println("permission denied.");
                e.printStackTrace();
            }
        }
        return "OK";
    }
}
