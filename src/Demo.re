module Throttle = {
  type a;
  type b;

  let throttle1 = (fn: 'a => unit): ('a => unit) => {
    let inThrottle = ref(false);

    (input: 'a) => (
      if (! inThrottle^) {
        fn(input);

        inThrottle := true;
        Js.Global.setTimeout(() => inThrottle := false, 2000)->ignore;
      }: unit
    );
  };

  let throttle2 = (fn: ('a, 'b) => unit) => {
    let inThrottle = ref(false);

    ((a: 'a, b: 'b)) => (
      if (! inThrottle^) {
        fn(a, b);

        inThrottle := true;
        Js.Global.setTimeout(() => inThrottle := false, 2000)->ignore;
      }: unit
    );
  };
};

module Debounce = {
  type a;

  let debounce1 = (~fn: 'a => unit, ~timeOut=1000): ('a => unit) => {
    let id = ref(Js.Nullable.null);

    (a: 'a) => {
      (id^)
      ->Js.Nullable.toOption
      ->Belt.Option.mapWithDefault((), Js.Global.clearTimeout);

      id := Js.Nullable.return(Js.Global.setTimeout(() => fn(a), timeOut));
      ();
    };
  };
};