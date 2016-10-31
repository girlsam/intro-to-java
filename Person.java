public class Person {

  public String name;
  public int age;

  public Person(String name, int age) {
    this.name = name;
    this.age = age;
  }

  public String name() {
    return this.name;
  }

  public int age() {
    return this.age;
  }

  public static void main(String[] args) {
    // Person teacher = new Person();
    String teacherName = "Michael";
    int teacherAge = 30;
    System.out.println("The teacher's name is " + teacherName + " and s/he is " + teacherAge + " years old.");
  }

}
