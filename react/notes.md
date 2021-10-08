**NOTES**

hooks:

useState() : when data changes, it re-renders/updates the UI where the variable is called
it defines the reactive value and the setter for that variable
     
useEffect(): runs when component is mounted and when the state changes.
para evitar loops infinitos se alteramos o state neste hook, devemos utilizar o 2o argumento: array de dependências: [], se for vazio uma vez que não tem dependências só corre 1x quando o componente é inicializado, mas se quisermos que volte a correr caso um state mude devemos colocar no array: [count], dá rerun sempre que este state muda.

useContext(): acessar ou consumir o valor do context provider, se o valor do parent mudar, vai mudar automaticamente o do child.

useRef(): allows you to create a mutable value that doesn't trigger a re render of the UI on value changes.
when need to grab an element of the DOM u can use useRef, example grab a button by the ref and force a click.

useReducer(): a different way to use the state, similar to the useState(). instead of updating the state directly, the action goes to a reducer function and that reducer function determinates how to compute the next state.
dispatch action will trigger the reducer function.
helps you to manage complexity of the code as it grows.

useMemo(): helps you to optimize computation cost and improve performance.instead of computing a value in every render we can memorize the value. Whenever the count value changes.

useCallback(): a function object is created each time the component is re rendered. use when you want to memorize the function to prevent unecessary re-renders, for example when you pass the same function to multiple child components.

useLayoutEffect(): similar to useEffect() but runs after render but before painting to screen.

useDebugValue(): make possible your define custom labels.

It is possible to create your own hooks.

-------

queries (apollo):

useQuery vs useLazyQuery:

When React mounts and renders a component that calls the useQuery hook, Apollo Client automatically executes the specified query. But what if you want to execute a query in response to a different event, such as a user clicking a button? The useLazyQuery hook is perfect for executing queries in response to events other than component rendering. This hook acts just like useQuery, with one key exception: when useLazyQuery is called, it does not immediately execute its associated query. Instead, it returns a function in its result tuple that you can call whenever you're ready to execute the query.
