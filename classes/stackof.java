public class User {
    private String email;
    private String password;

    public User(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public String getPassword() {
        return this.password.toUpperCase();
    }

    public void setPassword(String value) {
        this.password = value;
    }

    public static void main(String[] args) {
        User thiru = new User("h@hitses", "123");
        System.out.println(thiru.getPassword());
    }
}
