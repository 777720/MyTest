import java.util.Stack;
/*
给你两个表示两个非负数字的链表。数字以相反的顺序存储，其节点包含单个数字。将这两个数字相加并将其作为一个链表返回。

输入: (2 -> 4 -> 3) + (5 -> 6 -> 4)
输出: 7 -> 0 -> 8
*/

class ListNode{
    int val;
    ListNode next;
    ListNode(int val){
        this.val=val;
        this.next=null;
    }
}

public class AddTwoNumbersTest {
  public static void main (String[] args) {
    ListNode l1 = new ListNode(2);
    l1.nextNode = new ListNode(4);
    l1.nextNode.nextNode = new ListNode(3);
    ListNode l2 = new ListNode(5);
    l2.nextNode = new ListNode(6);
    l2.nextNode.nextNode = new ListNode(4);
    AddTwoNumbersTest t = new AddTwoNumbersTest();
    Stack
    t.addTwoNumbers()

  }
  public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    int carry=0;
    ListNode listNode=new ListNode(0);
    ListNode p1=l1,p2=l2,p3=listNode;
    while(p1!=null||p2!=null){
        if(p1!=null){
            carry+=p1.val;
            p1=p1.next;
        }
        if(p2!=null){
            carry+=p2.val;
            p2=p2.next;
        }
        p3.next=new ListNode(carry%10);
        p3=p3.next;
        carry/=10;
    }
    if(carry==1)
        p3.next=new ListNode(1);
    return listNode.next;
  }
}
