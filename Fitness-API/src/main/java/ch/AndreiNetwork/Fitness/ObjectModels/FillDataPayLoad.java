package ch.AndreiNetwork.Fitness.ObjectModels;

import java.sql.Date;

public class FillDataPayLoad {
    int id;
    String goal;
    boolean gender;
    double weight;
    double height;
    Date birthday;

    public FillDataPayLoad(int id, String goal, boolean gender, double weight, double height, Date birthday) {
        this.id = id;
        this.goal = goal;
        this.gender = gender;
        this.weight = weight;
        this.height = height;
        this.birthday = birthday;
    }

    public int getId() {
        return id;
    }

    public String getGoal() {
        return goal;
    }

    public boolean isGender() {
        return gender;
    }

    public double getWeight() {
        return weight;
    }

    public double getHeight() {
        return height;
    }

    public Date getBirthday() {
        return birthday;
    }
}
