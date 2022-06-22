function badWordCatch(){

    var wordInput = document.getElementById("wordInput").value;

    // split the words by spaces (" ")
    var arr = wordInput.split(" ");
    // bad words to look for
    var badWords = ["legos", "cloud", "manifold"];
     var index , totalWordAmount = 0, totalWordsFoundList = '';
     for(index=0;index<arr.length; ++index){
     if(jQuery.inArray( arr[index], badWords ) > -1){
       totalWordAmount = totalWordAmount + 1;
       totalWordsFoundList = totalWordsFoundList+' '+ arr[index]; 
      // alert(arr[index])
     }
     //alert(totalWordsFoundList)
     }
     //alert(totalWordsFoundList)
     document.getElementById("wordsFound").innerHTML = totalWordsFoundList;
     document.getElementById("wordAmount").innerHTML = totalWordAmount;
      

    //find bad words from the input
    //output on the dom "if bad words were found" 
    //output on the dom how many bad words were found
}
