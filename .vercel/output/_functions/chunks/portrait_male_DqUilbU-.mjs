const portrait_male = new Proxy({"src":"/_astro/portrait_male.CGQOgqD7.png","width":4000,"height":4000,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/assets/portrait_male.png";
							}
							
							return target[name];
						}
					});

export { portrait_male as default };
