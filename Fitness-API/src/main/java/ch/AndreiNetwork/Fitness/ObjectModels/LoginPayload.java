package ch.AndreiNetwork.Fitness.ObjectModels;

public class LoginPayload {
    private boolean loggedIn;
    private boolean dataFilled;

    public LoginPayload(boolean loggedIn, boolean dataFilled) {
        this.loggedIn = loggedIn;
        this.dataFilled = dataFilled;
    }

    public boolean isLoggedIn() {
        return loggedIn;
    }

    public boolean isDataFilled() {
        return dataFilled;
    }
}
