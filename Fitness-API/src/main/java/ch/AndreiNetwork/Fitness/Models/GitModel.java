package ch.AndreiNetwork.Fitness.Models;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class GitModel {
    public void pull() {
        try {
            Process process = Runtime.getRuntime().exec("git pull https://github.com/AndreiRobertoOleniuc/Go-Fitness.git master ");
            StringBuilder output = new StringBuilder();
            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
            String line;
            while ((line = reader.readLine()) != null) {
                output.append(line + "\n");
            }
            int exitVal = process.waitFor();
            if (exitVal == 0) {
                System.out.println("Success");
                System.out.println(output);
            } else {
                System.out.println("Something abnormal has happened :( ");
            }
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }
}
