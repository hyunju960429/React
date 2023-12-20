
# useEffect

# useEffect(()=>{},[])

# useEffect(()=>{},[]) ==> 배열이 비어있을 경우에는 component가 실행될때 처음 한번만 실행된다.
![image](https://github.com/hyunju960429/React/assets/145514544/fd4c62ab-8e0c-40fb-a9da-24fbe71088c9)

# useEffect(()=>{},[products]) ==> component가 실행될때 처음 한번 실행된 후 products의 값이 바뀔때마다 useEffect가 실행된다.
![image](https://github.com/hyunju960429/React/assets/145514544/313e8b55-fee2-4c7e-bcc4-3c90c3069142)

# useEffect(()=>{},[products, count]) ==> component가 실행될때 처음 한번 실행된 후 products와 count 둘중의 하나라도 값이 바뀔때마다 useEffect가 실행된다. (두개 다 바뀌어도 한번만 실행된다.)
