package ch.AndreiNetwork.Fitness.ObjectModels;

import java.sql.Date;
import java.util.ArrayList;

public class FillDataPayLoad {
    Date birthday;
    ArrayList<Double> stunden;

    public FillDataPayLoad(Date birthday, ArrayList<Double> stunden) {
        this.birthday = birthday;
        this.stunden = stunden;
    }

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public ArrayList<Double> getStunden() {
        return stunden;
    }

    public void setStunden(ArrayList<Double> stunden) {
        this.stunden = stunden;
    }
}
