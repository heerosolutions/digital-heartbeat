const companies = [
  "TechVault", "CloudSync", "DataPrime", "NetGuard", "SecureOps", "InfraCore"
];

const TrustedBySection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-heading text-lg font-semibold mb-8">
          Trusted by businesses across industries.
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {companies.map((name) => (
            <span key={name} className="text-muted-foreground font-heading text-lg font-medium tracking-wide">
              {name}
            </span>
          ))}
          <span className="text-sm border border-border rounded-full px-4 py-1 text-muted-foreground">
            30+ More
          </span>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
