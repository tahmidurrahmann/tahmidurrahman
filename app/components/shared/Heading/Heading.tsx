const Heading = ({ title }: { title: string }) => {
    return (
        <div className="flex justify-center items-center py-24 lg:pt-40 uppercase">
            <h1 className="text-[#c60678] text-2xl font-semibold">{title}</h1>
        </div>
    );
};

export default Heading;
