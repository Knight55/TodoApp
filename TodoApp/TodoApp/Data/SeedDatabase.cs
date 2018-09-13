using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TodoApp.Data
{
    public static class SeedDatabase
    {
        public static void Seed(this TodoContext ctx)
        {
            if (!ctx.Todos.Any())
            {
                ctx.Todos.Add(new Todo()
                {
                    Title = "ASP.NET Core 2.0",
                    IsDone = true
                });

                ctx.Todos.Add(new Todo()
                {
                    Title = "React.js",
                    IsDone = false
                });

                ctx.Todos.Add(new Todo()
                {
                    Title = "Redux",
                    IsDone = true
                });

                ctx.SaveChanges();
            }
        }
    }
}
