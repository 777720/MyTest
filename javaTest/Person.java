
interface Message {

} 
class Contact  implements Message {
  private String address;
	private String telphone;
	private String zipcode;

  public  Contact(String address, String telphone, String zipcode) {
    this.address = address;
    this.telphone = telphone;
    this.zipcode = zipcode;
  }
  public String toString(){
        return "联系方式：\n" + 
                "\t|- 电话： " + telphone + "\n" + 
                "\t|- 地址： " + address + "\n" +
                "\t|- 邮编： " + zipcode + "\n";
  }
}
class Introduction  implements Message {
  private String name;
	private String sex;
	private int age;
	private String job;
  
  public Introduction (String name, String sex, int age, String job) {
    this.name = name;
    this.sex = sex;
    this.age = age;
    this.job = job;
  } 
  public String toString(){
      return "基本信息：\n" + 
              "\t|- 姓名： " + name + "\n" + 
              "\t|- 性别： " + sex + "\n" +
              "\t|- 年龄： " + age + "\n" +
              "\t|- 工作： " + job + "\n";
  }
}
public class Person<T extends Message> {
  private T message;
  public Person(T message) {
    this.message = message;
  }
  public String toString() {
    return message.toString();
  }
  public static void main(String[] args) {
    Introduction i = new Introduction("zifangsky", "男", 256, "程序猿");
    Person<Introduction> p = new Person<Introduction>(i);
    System.out.println(p);


    Contact c = new Contact("https://www.zifangsky.cn", "10086", "1024");
    Person<Contact> p2 = new Person<Contact>(c);
    System.out.println(p2);
  }
}