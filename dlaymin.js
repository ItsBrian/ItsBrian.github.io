function dLay(r){f="";d=[];p=r.toString().replace((/^\s+/gm),"").split("\n");for(l in p){c=p[l].split(" ");if(c[0]=="sleep"){f+="setTimeout(function(){";d.push(c[1])}else{f+=p[l]+`;`}}while(d.length>0){f+=`},${d[0]});`;d.shift()}return f}
