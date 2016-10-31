public class Calculator {

  public int total;
  public int num1;
  public int num2;

  public Calculator(int num1, int num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  public int add() {
    total = num1 + num2;
    return total;
  }

  public int subtract() {
    total = num1 - num2;
    return total;
  }

  public int mutliply() {
    total = num1 * num2;
    return total;
  }

  public int divide() {
    total = num1 + num2;
    return total;
  }

  public static void main(String[] args) {
    Calculator newCalc = new Calculator(2, 7);
    System.out.println(newCalc.add());
  }

}
