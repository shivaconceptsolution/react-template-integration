import { useRef,useState } from "react"

function Marksheetdemo()
{
    const text1 = useRef()
    const text2 = useRef()
    const text3 = useRef()
    const text4 = useRef()
    const text5 = useRef()
    var arr=[];
    var[res,setRes] = useState(undefined)
    function funMark(event)
    {
       arr.push(parseInt(text1.current.value));
       arr.push(parseInt(text2.current.value));
       arr.push(parseInt(text3.current.value));
       arr.push(parseInt(text4.current.value));
       arr.push(parseInt(text5.current.value));
       var c=0
       var total=0;
       var data='';
       var grace=0;
       var flag=true;
       for(var i=0;i<arr.length;i++)
       {
            if(arr[i]<0 || arr[i] > 100)
            {
                data = 'invalid marks';
                flag=false;
                break;
            }
            if(arr[i]<33)
            {
                c++;
                grace=arr[i];
            }
            total+=arr[i];
       }
       if(flag)
       {
       if(c===0 || (c===1 && grace>=28))
       {
          if(c===0)
          {
           data = " Pass "
          }
          else
          {
            data = " Pass by Grace";
          }
       }
       else if(c===1)
       {
           data = "Suppl "
       }
       else
       {
          data = "Fail "
       }
    }
       setRes(data)
       event.preventDefault()

    }
    return(<div>
       <form onSubmit={funMark}>
       <input type="text" ref={text1} placeholder="Enter First Number" />
       <br/>
       <input type="text" ref={text2} placeholder="Enter Second Number" />
       <br />
       <input type="text" ref={text3} placeholder="Enter Third Number" />
       <br />
       <input type="text" ref={text4} placeholder="Enter Fourth Number" />
       <br />
       <input type="text" ref={text5} placeholder="Enter Fifth Number" />
       <br />
       <input type="submit" value="Sort" />
       </form>
       {res}

    </div>)
}

export default Marksheetdemo;