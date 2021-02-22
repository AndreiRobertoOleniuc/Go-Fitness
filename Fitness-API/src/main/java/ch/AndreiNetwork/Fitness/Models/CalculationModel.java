package ch.AndreiNetwork.Fitness.Models;

import java.util.ArrayList;

public class CalculationModel {
    // How to Calculate Weight loss
    //Weight Gain (+300) -- (+500) normal
    //Fast Weigh Gain (+700) -- (+1000)
    //Weight Loss (-500) -- (-1000)
    //https://www.sportunterricht.ch/Theorie/Energie/energie.php

    public double getBaseCalorie(boolean gender, double weight, double height, double age) {
        if (gender) {
            return 66.47 + (13.7 * weight) + (5 * height) - (6.8 * age);
        } else {
            return 655.1 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
        }
    }

    public double getPAL(ArrayList<Double> stunden) {
        return ((stunden.get(0) * 0.95) + (stunden.get(1) * 1.2) + (stunden.get(2) * 1.45) + (stunden.get(3) * 1.65) + (stunden.get(4) * 1.85) + (stunden.get(5) * 2.2)) / 24;
    }
}
