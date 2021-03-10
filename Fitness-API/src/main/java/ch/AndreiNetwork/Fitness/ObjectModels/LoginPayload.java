package ch.AndreiNetwork.Fitness.ObjectModels;

public class LoginPayload {
    private boolean loggedIn;
    private boolean dataFilled;
    private int userID;

    public LoginPayload(boolean loggedIn, boolean dataFilled,int userID) {
        this.loggedIn = loggedIn;
        this.dataFilled = dataFilled;
        this.userID= userID;
    }

    public boolean isLoggedIn() {
        return loggedIn;
    }

    public boolean isDataFilled() {
        return dataFilled;
    }

    public int getUserID() {
        return userID;
    }
}
