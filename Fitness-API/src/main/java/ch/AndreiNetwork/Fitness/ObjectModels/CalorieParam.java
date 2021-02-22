package ch.AndreiNetwork.Fitness.ObjectModels;

public class CalorieParam {
    private boolean gender;
    private double weight;
    private double height;
    private double age;
    private double[] stundenzahl;

    public CalorieParam(boolean gender, double weight, double height, double age, double[] stundenzahl) {
        this.gender = gender;
        this.weight = weight;
        this.height = height;
        this.age = age;
        this.stundenzahl = stundenzahl;
    }

    public boolean isGender() {
        return gender;
    }

    public void setGender(boolean gender) {
        this.gender = gender;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    public double getHeight() {
        return height;
    }

    public void setHeight(double height) {
        this.height = height;
    }

    public double getAge() {
        return age;
    }

    public void setAge(double age) {
        this.age = age;
    }

    public double[] getStundenzahl() {
        return stundenzahl;
    }

    public void setStundenzahl(double[] stundenzahl) {
        this.stundenzahl = stundenzahl;
    }
}
