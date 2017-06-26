public class Point<T> {
  private T x;
  private T y;

  public T getX(){
    return x;
  }
  public T getY() {
    return y;
  }
  public void setX(T x) {
    this.x = x;
  }
  public void setY(T y) {
    this.y = y;
  }

  public static void main(String[] args) {
    Point<Integer> p = new Point<Integer>();
    p.setX(10);
    p.setY(20);
    int x = p.getX();
    int y = p.getY();
    System.out.println("整数表示 X坐标是：" + x + "，Y坐标是：" + y);
    Point<String> p2 = new Point<String>();
    p2.setX("20");
    p2.setY("40");
    String x2 = p2.getX();
    String y2 = p2.getY();
    System.out.println("字符串表示 X坐标是：" + x2 + "，Y坐标是：" + y2);
  }

}