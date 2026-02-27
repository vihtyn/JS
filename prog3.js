var a = 0;

a = prompt('Digite um número');
for( i=0; i<a; i++){
    if(i % 2 == 0){
        document.writeln('<br><font color = "red">Valor par' + i);
    }else{
        document.writeln('<br><font color= "blue">Valor impar ' + i);
    }
}