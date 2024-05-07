using System.ComponentModel.DataAnnotations;

namespace BE_Card.Models
{
    public class CreditCard
    {
        public int Id { get; set; }
        [Required]  
        public int Headline { get; set; }
        [Required]
        public int CardNumber { get; set; }
        [Required]
        public int DateOfExpire { get; set; }
        [Required]
        public int CVV { get; set; }
    }
}
