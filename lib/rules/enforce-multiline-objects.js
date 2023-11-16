module.exports = {
	meta: {
		type: "problem",
		fixable: "code",
		schema: [],
		messages: {
			avoidSingleLineObject:
				"Properties inside object should be on separate lines. Object brackets shouldn't be on same line as first or last object property.",
		},
	},
	create(context) {
		return {
			VariableDeclarator: function (node) {
				const isObject =
					node.id && node.id.type === "ObjectPattern" && node.init;

				if (isObject) {
					const properties = node.id.properties;
					const hasProperties = properties.length > 0;

					const isSingleLine =
						node.loc.start.line === node.loc.end.line;
					const isMultiline = !isSingleLine;

					if (isSingleLine && hasProperties) {
						context.report({
							node,
							messageId: "avoidSingleLineObject",
						});
					}

					if (isMultiline && hasProperties) {
						const isMultilinedCorrectly = properties.every(
							function (property, index) {
								return (
									index === 0 ||
									property.loc.start.line !==
										properties[index - 1].loc.end.line
								);
							}
						);

						const firstProperty = properties[0];
						const lastProperty = properties[properties.length - 1];
						const firstPropertyOnSameLineAsObjectBracket =
							firstProperty.loc.start.line ===
							node.id.loc.start.line;
						const lastPropertyOnSameLineAsObjectBracket =
							lastProperty.loc.end.line === node.id.loc.end.line;

						if (
							!isMultilinedCorrectly ||
							firstPropertyOnSameLineAsObjectBracket ||
							lastPropertyOnSameLineAsObjectBracket
						) {
							context.report({
								node,
								messageId: "avoidSingleLineObject",
							});
						}
					}
				}
			},
		};
	},
};
