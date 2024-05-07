using BE_Card.Models;
using Microsoft.EntityFrameworkCore;

namespace BE_Card
{
    public class ApplicationDBcontent: DbContext
    {
        DbSet<CreditCard> creditCard { get; set; }
        public ApplicationDBcontent(DbContextOptions<ApplicationDBcontent> options): base(options) { }
    }
}
