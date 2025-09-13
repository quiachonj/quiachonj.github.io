const comingSoon = new Proxy({"src":"/_astro/coming-soon.CJvWaPDP.png","width":1023,"height":1023,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/assets/coming-soon.png";
							}
							
							return target[name];
						}
					});

export { comingSoon as default };
