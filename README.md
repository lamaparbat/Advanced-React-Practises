# React Advance Practises
```
  1. Error Boundary [ComponentDidCatch || getDerivedStateFromError() ]

     Intro - It is process of handling error in react by utilizing the component lifecycle methods like ComponentDidCatch() && getDerivedStateFromError()

     a). ComponentDidCatch()
        - It is used to catch and handle errors that occur during the rendering of a component's child components.

     b). static getDerivedStateFromError()
        - It is used to update the component state in response to an error occurring in any of its child components.

  2. Suspense
     - Best of lazy loading and fallback ui before the async api call resolves.

  3. React-Query
    - Prioritizing api calls with features like pre-made utility hooks like parallelFetching and caching.

  4. Custom Hooks
    - utilizing built-in react hooks inside a function and used as a utility function

  5. Memoization (useMemo, memo, useCallback)
    - resolve re-rendering issues

  6. React Portal
    - creates a new top-level React tree and injects its children into it.
    - necessary for proper styling (especially positioning)
    - generally used when designing Popup Modal, Loading bar, or lightboxes

  7. react-prism     [UI DESIGN COMPONENT]
    - Code snippet formatter library
    - support multiple language formatting, font color and background themes

  8. scroll animation using css only
   - @keyframes, scroll()

  9. Formik with Yup
  - Formik
  
    Pros
      - Getting values in and out of form state
      - Validation and error messages
      - Handling form submission

    Cons
      - Re-render issues: When one field state change, entire form re-render.
      - Not suitable if a form is large and field has expensive functions

    Solution / Alternatives
      - Use react-hook-form library

    Yup - Form validaton schema library
```

## Hooks
  1. useDeferredValue()
    Example: Suppose you are have input field, and
      - has expensive task in onChange() event and
      - has update the state after completing expensive task
      - the state value is set in input field value
     
     Problem: You will see input type lagging because everytime u keep pressing keys, the expensive onChange event triggered and update the sate in view and re-render occurs
     
     Solution: To solve this issues, useDeferredValue() can be used where it is only used for view part, which works as like debounce and throttling technique.

     ```
            const  [name, setName] = useState(null);
            const deferrredName = useDeferredValue(name);
  
            const handleChange =  (e) => {
                for(let i =0;i<500;i++){console.log(i)}
                setName(e.target.value)
            }
  
           <>
              <input type='text' value={name} onChange={handleChange} />
              <span>{deferrredName}</span>
           </>
     ```
