import java.lang.Integer;
import java.util.HashMap;
import java.util.Map;
import java.lang.System;

/*
Given an array of integers, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target,
where index1 must be less than index2.
Please note that your returned answers (both index1 and index2) are not zero-based.

You may assume that each input would have exactly one solution.

Input: numbers={2, 7, 11, 15}, target=9
Output: index1=1, index2=2
*/


class TwoSumTest {
  public static void main(String[] args) {
    int[] numbers = { 2, 7, 11, 15 };
    TwoSumTest test = new TwoSumTest();

    int[] result = test.twoSum(numbers, 9);
    for (int i=0; i<result.length; i++) {
      System.out.println(result[i]);
    }
  }
  public int[] twoSum(int[] numbers, int target){
    int[] result = new int[2];
    Map<Integer, Integer> map = new HashMap<Integer, Integer>();
    for (int i=0; i<numbers.length; i++ ) {
      if (map.containsKey(target - numbers[i])) {
        result[1] = i + 1;
        result[0] = map.get(target - numbers[i]);
        return result;
      }
      map.put(numbers[i], i + 1);
    }
    return result;
  }
}
