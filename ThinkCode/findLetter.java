package think;

public class findLetter{
	
 public static void main(String[] args) {
	 System.out.println(findMissingLetter(new char[] { 'a','b','c','d','f' })); //e
	 System.out.println(findMissingLetter(new char[] { 'A','B','C','D','F' })); //E
	 System.out.println(findMissingLetter(new char[] { 'm','n','o','q','r' })); //p
}
  public static char findMissingLetter(char[] array){
	  String abc = "abcdefghijklmnopqrstuvwxyz";
	  char[] charArray = abc.toCharArray();
	  int control = 0;
	  for (int i = 0; i < charArray.length; i++) {
		if (Character.toUpperCase(charArray[i]) == Character.toUpperCase(array[control])){
			control++;	
		}else{
			if (control != 0) {
				if (Character.isUpperCase(array[control])) return Character.toUpperCase(charArray[i]);
				return charArray[i];
			}
		}		
	}	  
    return ' ';
  }
}