using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace Register_Login_JwtIdentity.Models
{
    public class Register:IdentityUser
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Salary { get; set; }
        public string Password { get; set; }
        [Display(Name="Confirm Password")]
        public string ConfirmPassword { get; set; }
    }
}
