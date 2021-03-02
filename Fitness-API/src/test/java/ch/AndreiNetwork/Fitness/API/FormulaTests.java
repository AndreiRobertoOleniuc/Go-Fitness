package ch.AndreiNetwork.Fitness.API;

import ch.AndreiNetwork.Fitness.Models.CalculationModel;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.*;


public class FormulaTests {
    //Old Formula not Accurate
    @Test
    public void testCalorieCalulator() {
        double weight = 61.4;
        weight = weight / 0.45359237;
        int activityLevel = 1;
        double calories = 3.0;
        switch (activityLevel) {
            case 1:
                calories = weight * 13;
                break;
            case 2:
                calories = weight * 15;
                break;
            case 3:
                calories = weight * 18;
                break;
        }
        assertEquals(round(calories, 2), 1759.73);
    }

    @Test
    public void testCalorieCalulator2() {
        double weight = 61.4;
        weight = weight / 0.45359237;
        int activityLevel = 2;
        double calories = 3.0;
        switch (activityLevel) {
            case 1:
                calories = weight * 13;
                break;
            case 2:
                calories = weight * 15;
                break;
            case 3:
                calories = weight * 18;
                break;
        }
        assertEquals(round(calories, 2), 2030.46);
    }

    private double round(double value, int decimalPoints) {
        double d = Math.pow(10, decimalPoints);
        return Math.round(value * d) / d;
    }

    @Test
    public void testCalorieAdd() {
        double weight = 61.4;
        weight = weight / 0.45359237;
        int activityLevel = 2;
        double calories = 3.0;
        switch (activityLevel) {
            case 1:
                calories = weight * 13;
                break;
            case 2:
                calories = weight * 15;
                break;
            case 3:
                calories = weight * 18;
                break;
        }
        calories += 450.0;
        assertEquals(round(calories, 2), 2030.46 + 450.0);
    }

    @Test
    public void testCalorieSub() {
        double weight = 61.4;
        weight = weight / 0.45359237;
        int activityLevel = 2;
        double calories = 3.0;
        switch (activityLevel) {
            case 1:
                calories = weight * 13;
                break;
            case 2:
                calories = weight * 15;
                break;
            case 3:
                calories = weight * 18;
                break;
        }
        calories -= 750.0;
        assertEquals(round(calories, 2), 2030.46 - 750.0);
    }

    //New Formula
    @Test
    public void testNewFormula2() {
        double cal;
        double base = new CalculationModel().getBaseCalorie(false, 55, 153, 17);
        ArrayList<Double> numbers = new ArrayList<Double>(Arrays. asList(10.0, 2.0, 7.0, 2.0, 1.0, 2.0));
        cal = base * new CalculationModel().getPAL(numbers);
        assertEquals(1815, (int) cal);
    }
}
