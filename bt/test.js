function showValue(index)// LẤY GIÁ TRỊ
{
    // var x = document.getElementById("parent");
    // var html = x.innerHTML;
    // console.log(html);

    // var y = document.getElementsByClassName("children");
    // console.log(y);
    
    var y = document.getElementById("parent").childNodes;
    
    console.log(y[5]);
    document.getElementById("parent").innerHTML = y[5].innerHTML;
}
function changeValue(index,value)//Thay đổi giá trị
{
    document.getElementsByClassName("children")[index].innerHTML = value ;
}
function swap(index1,index2)
{
    var t;
    t = index1;
    index1 = index2;
    index2 = t;
}
function convertValue(index1,index2)//thay doi vi tri cac phan tu
{
    var a = document.getElementsByClassName("children")[index1];
    // console.log(a);
    var b = document.getElementsByClassName("children")[index2];
    swap(a,b);
    console.log(swap(a,b));
}
function createNode()
{
    
    var node = document.createElement("li");
    node.innerHTML = "Hello World";
    document.getElementsByTagName('li')[0].appendChild(node);
}
function createNode1()
{
    
    var node = document.createElement("li");
    node.innerHTML = "Hello World";
    document.getElementById("parent").innerHTML = "Hello World";
}
