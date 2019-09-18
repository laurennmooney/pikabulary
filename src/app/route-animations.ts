import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from "@angular/animations";
export const slideInAnimation = trigger("routeAnimations", [
  transition("* <=> *", [
    // Set a default  style for enter and leave
    query(":enter, :leave", [
      style({
        position: "absolute",
        left: 0,
        width: "100%",
        opacity: 0,
        transform: "scale(0) translateY(100%)"
      })
    ]),
    // Animate the new page in
    query(":enter", [
      animate(
        "600ms ease",
        style({ opacity: 1, transform: "scale(1) translateY(0)" })
      )
    ])
  ])
  // transition("Instructions => Quiz", [
  //   // Set a default  style for enter and leave
  //   query(":enter, :leave", [
  //     style({
  //       position: "absolute",
  //       left: 0,
  //       width: "100%",
  //       opacity: 0,
  //       transform: "scale(0) translateY(100%)"
  //     })
  //   ]),
  //   // Animate the new page in
  //   query(":enter", [
  //     animate(
  //       "600ms ease",
  //       style({ opacity: 1, transform: "scale(1) translateY(0)" })
  //     )
  //   ])
  // ])

  // transition("results => *", [
  //   query(":enter, :leave", style({ position: "fixed", width: "100%" }), {
  //     optional: true
  //   }),
  //   group([
  //     query(
  //       ":enter",
  //       [
  //         style({ transform: "translateX(-100%)" }),
  //         animate("0.5s ease-in-out", style({ transform: "translateX(0%)" }))
  //       ],
  //       { optional: true }
  //     ),
  //     query(
  //       ":leave",
  //       [
  //         style({ transform: "translateX(0%)" }),
  //         animate("0.5s ease-in-out", style({ transform: "translateX(100%)" }))
  //       ],
  //       { optional: true }
  //     )
  //   ])
  // ]),
  // transition("instructions => *", [
  //   query(":enter, :leave", style({ position: "fixed", width: "100%" }), {
  //     optional: true
  //   }),
  //   group([
  //     query(
  //       ":enter",
  //       [
  //         style({ transform: "translateX(100%)" }),
  //         animate("0.5s ease-in-out", style({ transform: "translateX(0%)" }))
  //       ],
  //       { optional: true }
  //     ),
  //     query(
  //       ":leave",
  //       [
  //         style({ transform: "translateX(0%)" }),
  //         animate("0.5s ease-in-out", style({ transform: "translateX(-100%)" }))
  //       ],
  //       { optional: true }
  //     )
  //   ])
  // ]),
  // transition("instructions => quiz", [
  //   query(":enter, :leave", style({ position: "fixed", width: "100%" }), {
  //     optional: true
  //   }),
  //   group([
  //     query(
  //       ":enter",
  //       [
  //         style({ transform: "translateX(100%)" }),
  //         animate("0.5s ease-in-out", style({ transform: "translateX(0%)" }))
  //       ],
  //       { optional: true }
  //     ),
  //     query(
  //       ":leave",
  //       [
  //         style({ transform: "translateX(0%)" }),
  //         animate("0.5s ease-in-out", style({ transform: "translateX(-100%)" }))
  //       ],
  //       { optional: true }
  //     )
  //   ])
  // ]),
  // transition("instructions => quiz", [
  //   query(":enter, :leave", style({ position: "fixed", width: "100%" }), {
  //     optional: true
  //   }),
  //   group([
  //     query(
  //       ":enter",
  //       [
  //         style({ transform: "translateX(-100%)" }),
  //         animate("0.5s ease-in-out", style({ transform: "translateX(0%)" }))
  //       ],
  //       { optional: true }
  //     ),
  //     query(
  //       ":leave",
  //       [
  //         style({ transform: "translateX(0%)" }),
  //         animate("0.5s ease-in-out", style({ transform: "translateX(100%)" }))
  //       ],
  //       { optional: true }
  //     )
  //   ])
  // ])
]);
