const { RuleTester } = require("eslint");
const enforceMultilineObjects = require("../../../lib/rules/enforce-multiline-objects");

const ruleTester = new RuleTester({
	parserOptions: { ecmaVersion: 2016 },
});

// Throws error if the tests in ruleTester.run() do not pass
ruleTester.run(
	"enforce-multiline-objects", // rule name
	enforceMultilineObjects, // rule code
	{
		// checks
		// 'valid' checks cases that should pass
		valid: [
			{
				code: `const {
        mutate: createCalendarItem,
        isLoading: saveLoading,
        error: errorCreateCalendarItem,
    } = useTeacherCreateCalendarItem();`,
			},
			{
				code: "let test = {}",
			},
		],
		// 'invalid' checks cases that should not pass
		invalid: [
			{
				code: `const { mutate: updateCalendarItemHook,
        isLoading: updateLoading, error: errorUpdateCalendarItem, } = useTeacherUpdateCalendarItem();`,
				output: `const {
        mutate: updateCalendarItemHook,
        isLoading: updateLoading, 
        error: errorUpdateCalendarItem
      } = useTeacherUpdateCalendarItem();`,
				errors: 1,
			},
			{
				code: `const { isOpenModalCalendarItem, setIsOpenModalCalendarItem } = calendarModalOption;`,
				output: `const { 
          isOpenModalCalendarItem,
          setIsOpenModalCalendarItem 
        } = calendarModalOption;`,
				errors: 1,
			},
			{
				code: `let {
          setValue: somethingElse, 
          handleSubmit } = formOption;`,
				output: `let {
          setValue: somethingElse, 
          handleSubmit 
        } = formOption;`,
				errors: 1,
			},
		],
	}
);

console.log("All tests passed!");
