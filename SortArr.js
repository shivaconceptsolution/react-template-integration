import { useRef,useState } from "react"

function SortArr()
{
    const text1 = useRef()
    const text2 = useRef()
    const text3 = useRef()
    const text4 = useRef()
    const text5 = useRef()
    var arr=[];
    var[res,setRes] = useState(undefined)
    function funSort(event)
    {
       arr.push(parseInt(text1.current.value));
       arr.push(parseInt(text2.current.value));
       arr.push(parseInt(text3.current.value));
       arr.push(parseInt(text4.current.value));
       arr.push(parseInt(text5.current.value));
       var data=''
       for(var i=0;i<arr.length;i++)
       {
        for(var j=i+1;j<arr.length;j++)
        {
            if(arr[i]<arr[j])
            {
                var temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
        data+=arr[i] + " "
       }
       setRes(data)
       event.preventDefault()

    }
    return(<div>
       <form onSubmit={funSort}>
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

export default SortArr;