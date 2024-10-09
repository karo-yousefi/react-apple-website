
export const animateWithGSAP = (timeline, item, rotationState, firstTarget, secondTarget, animationProps) => {
	timeline.to(item.current.rotation, {
		y: rotationState,
		duration: 1,
		ease: "power1.inOut ",
	})

	timeline.to(firstTarget, {
		...animationProps,
		ease: "power2.inOut",
	}, "<")

	timeline.to(secondTarget, {
		...animationProps,
		ease: "power2.inOut",
	}, "<")
}