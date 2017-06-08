package think;

public class findMissingLetter{
	
 public static void main(String[] args) {
	 System.out.println(findMissingLetter(new char[] { 'a','b','c','d','f' }));
	 System.out.println(findMissingLetter(new char[] { 'A','B','C','D','F' }));
}
  public static char findMissingLetter(char[] array){
	  String abc = "abcdefghijklmnopqrstuvwxyz";
	  char[] charArray = abc.toCharArray();
	  int control = 0;
	  for (int i = 0; i < charArray.length; i++) {
		if (Character.toUpperCase(charArray[i]) != Character.toUpperCase(array[control])){
			if (control != 0) {
				if (Character.isUpperCase(array[control])) return Character.toUpperCase(charArray[i]);
				return charArray[i];
			}			
		}
		control++;
	}	  
    return ' ';
  }
}