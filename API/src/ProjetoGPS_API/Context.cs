﻿using Microsoft.EntityFrameworkCore;
using ProjetoGPS_API.Models;

namespace ProjetoGPS_API.Models
{
	public class Context : DbContext
	{
		public Context(DbContextOptions<Context> options) : base(options)
		{
		}

		public DbSet<Admins> Admins { get; set; }
		public DbSet<Applications> Applications { get; set; }
		public DbSet<Comments> Comments { get; set; }
		public DbSet<Placeholders> Placeholders { get; set; }
	}
}
