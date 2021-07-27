class main{
    public static void showSubString(String text, int start, int end){
        system.out.println(text.substring(start,end));
    }
    
    public static void main(String[] args){
        String text = "Lasfloresazules";
        showSubString(text, 3, 7);
    }
}