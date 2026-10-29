const controlClasses =
	'mt-2 block w-full rounded-lg border border-ink/15 bg-cream-50 px-4 py-3 text-sm text-ink outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20';

export default function Field({
	label,
	name,
	type = 'text',
	as = 'input',
	value,
	onChange,
	error,
	required = false,
	placeholder,
	rows,
	options = [],
}) {
	const controlId = `field-${name}`;
	const errorId = `${controlId}-error`;
	const sharedProps = {
		id: controlId,
		name,
		value,
		onChange,
		required,
		placeholder,
		'aria-invalid': Boolean(error),
		'aria-describedby': error ? errorId : undefined,
		className: `${controlClasses}${error ? ' border-wine focus:border-wine focus:ring-wine/20' : ''}`,
	};

	let control;
	if (as === 'select') {
		control = (
			<select {...sharedProps}>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		);
	} else if (as === 'textarea') {
		control = <textarea {...sharedProps} rows={rows ?? 4} />;
	} else {
		control = <input {...sharedProps} type={type} />;
	}

	return (
		<div className="w-full">
			<label htmlFor={controlId} className="block text-sm font-medium text-ink">
				{label}
				{required && <span aria-hidden="true" className="ml-1 text-wine">*</span>}
			</label>
			{control}
			{error && (
				<p id={errorId} className="mt-1.5 text-xs text-wine" role="alert">
					{error}
				</p>
			)}
		</div>
	);
}
