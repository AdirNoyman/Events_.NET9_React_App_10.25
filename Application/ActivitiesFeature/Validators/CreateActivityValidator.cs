using Application.ActivitiesFeature.Commands;
using FluentValidation;

namespace Application.ActivitiesFeature.Validators
{
    public class CreateActivityValidator : AbstractValidator<CreateActivity.Command>
    {
        public CreateActivityValidator()
        {
            RuleFor(x => x.NewActivityDTO.Title)
                .NotEmpty().WithMessage("Title is required 🤨.");
            RuleFor(x => x.NewActivityDTO.Description)
                .NotEmpty().WithMessage("Description is required 🤨.");
        }
    }
}