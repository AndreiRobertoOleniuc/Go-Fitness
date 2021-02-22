package ch.AndreiNetwork.Fitness.Encryption;
import org.springframework.security.crypto.bcrypt.BCrypt;

public class BCryptos {
    public String createHash(String input){
        return BCrypt.hashpw(input,BCrypt.gensalt(10));
    }
    public boolean checkPWD(String password,String passwordHashed){
        return BCrypt.checkpw(password,passwordHashed);
    }
}
